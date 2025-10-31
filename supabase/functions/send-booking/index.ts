import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  concern: string;
  preferredTime: string;
  howFound: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const bookingData: BookingRequest = await req.json();

    console.log("Processing booking:", bookingData);

    const serviceNames = {
      psychology: "Psicologia",
      hypnosis: "Hipnoterapia",
      both: "Psicologia + Hipnoterapia"
    };

    const serviceName = serviceNames[bookingData.service as keyof typeof serviceNames] || bookingData.service;

    // Send email to the professional using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Agendamentos <onboarding@resend.dev>",
        to: ["tiagobraune@gmail.com"],
        subject: `Novo Agendamento - ${bookingData.name}`,
        html: `
          <h1>Novo Agendamento Recebido</h1>
          <h2>Informações do Cliente</h2>
          <p><strong>Nome:</strong> ${bookingData.name}</p>
          <p><strong>Email:</strong> ${bookingData.email}</p>
          <p><strong>Telefone/WhatsApp:</strong> ${bookingData.phone}</p>
          
          <h2>Detalhes do Agendamento</h2>
          <p><strong>Serviço:</strong> ${serviceName}</p>
          <p><strong>Motivo/Preocupação:</strong> ${bookingData.concern}</p>
          <p><strong>Melhor horário:</strong> ${bookingData.preferredTime}</p>
          ${bookingData.howFound ? `<p><strong>Como conheceu:</strong> ${bookingData.howFound}</p>` : ''}
          
          <hr>
          <p style="color: #666; font-size: 12px;">Enviado automaticamente pelo formulário de agendamento</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      throw new Error(`Failed to send email: ${JSON.stringify(errorData)}`);
    }

    const emailData = await emailResponse.json();
    console.log("Email sent successfully:", emailData);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-booking function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
