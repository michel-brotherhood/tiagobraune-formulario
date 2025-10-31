import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MessageCircle, ArrowLeft } from "lucide-react";
import logo from "@/assets/logo.png";

const ThankYou = () => {
  const location = useLocation();
  const name = location.state?.name || "Você";

  const handleWhatsApp = () => {
    const whatsappNumber = "5521977205050";
    const message = encodeURIComponent(`Olá! Acabei de preencher o formulário de agendamento. Meu nome é ${name}.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6 animate-fade-in">
            <img 
              src={logo} 
              alt="Tiago Braune - Psicologia & Hipnose" 
              className="w-32 h-32 object-contain drop-shadow-xl"
            />
          </div>
        </div>

        <Card className="border-0 shadow-xl animate-scale-in">
          <CardContent className="p-8 md:p-12">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center animate-scale-in">
                  <CheckCircle className="w-12 h-12 text-primary" />
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  Obrigado, {name}!
                </h1>
                <p className="text-lg text-muted-foreground">
                  Seu agendamento foi recebido com sucesso
                </p>
              </div>

              <div className="py-6 space-y-3">
                <p className="text-base text-muted-foreground">
                  Recebi suas informações e entrarei em contato em breve.
                </p>
                <p className="text-base text-muted-foreground">
                  Para um atendimento mais rápido, clique no botão abaixo para iniciar uma conversa no WhatsApp.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <Button 
                  onClick={handleWhatsApp}
                  size="lg"
                  className="w-full text-lg gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Continuar no WhatsApp
                </Button>

                <Link to="/">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="w-full text-lg gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Voltar para o início
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <footer className="mt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Tiago Braune - Psicologia & Hipnose</p>
        </footer>
      </div>
    </div>
  );
};

export default ThankYou;
