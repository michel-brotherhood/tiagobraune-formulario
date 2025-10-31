import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  concern: string;
  preferredTime: string;
  howFound: string;
}

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    concern: "",
    preferredTime: "",
    howFound: "",
  });

  const totalSteps = 3;

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step === 1 && (!formData.name || !formData.email || !formData.phone)) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }
    if (step === 2 && !formData.service) {
      toast.error("Por favor, selecione um serviço");
      return;
    }
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.concern || !formData.preferredTime) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }
    toast.success("Agendamento enviado com sucesso! Entraremos em contato em breve.");
    console.log("Form submitted:", formData);
  };

  const progressPercentage = (step / totalSteps) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-6 md:mb-8 px-2">
        <div className="flex justify-between mb-2">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 transition-all text-sm sm:text-base ${
                step >= num
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground"
              }`}
            >
              {step > num ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : num}
            </div>
          ))}
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <Card className="border-0 shadow-xl">
        <CardContent className="p-4 sm:p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-4 sm:space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                    Informações Pessoais
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Vamos começar com suas informações básicas
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateFormData("name", e.target.value)}
                      placeholder="Seu nome"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Service Selection */}
            {step === 2 && (
              <div className="space-y-4 sm:space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                    Serviço de Interesse
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Qual serviço você está procurando?
                  </p>
                </div>

                <RadioGroup
                  value={formData.service}
                  onValueChange={(value) => updateFormData("service", value)}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent/5 transition-colors cursor-pointer">
                    <RadioGroupItem value="psychology" id="psychology" />
                    <Label htmlFor="psychology" className="cursor-pointer flex-1">
                      <div className="font-medium">Psicologia</div>
                      <div className="text-sm text-muted-foreground">
                        Terapia individual e acompanhamento psicológico
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent/5 transition-colors cursor-pointer">
                    <RadioGroupItem value="hypnosis" id="hypnosis" />
                    <Label htmlFor="hypnosis" className="cursor-pointer flex-1">
                      <div className="font-medium">Hipnoterapia</div>
                      <div className="text-sm text-muted-foreground">
                        Técnicas de hipnose para tratamento terapêutico
                      </div>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-accent/5 transition-colors cursor-pointer">
                    <RadioGroupItem value="both" id="both" />
                    <Label htmlFor="both" className="cursor-pointer flex-1">
                      <div className="font-medium">Psicologia + Hipnoterapia</div>
                      <div className="text-sm text-muted-foreground">
                        Tratamento integrado com ambas as abordagens
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Step 3: Details and Preferences */}
            {step === 3 && (
              <div className="space-y-4 sm:space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
                    Detalhes da Consulta
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Conte-nos mais sobre o que você procura
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="concern">
                      Qual sua principal preocupação ou motivo para buscar ajuda? *
                    </Label>
                    <Textarea
                      id="concern"
                      value={formData.concern}
                      onChange={(e) => updateFormData("concern", e.target.value)}
                      placeholder="Conte-nos brevemente sobre sua situação..."
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="preferredTime">Melhor horário para contato *</Label>
                    <Input
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => updateFormData("preferredTime", e.target.value)}
                      placeholder="Ex: Manhãs, tardes ou noites"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="howFound">Como conheceu o serviço?</Label>
                    <Input
                      id="howFound"
                      value={formData.howFound}
                      onChange={(e) => updateFormData("howFound", e.target.value)}
                      placeholder="Ex: Indicação, redes sociais, pesquisa..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6 sm:mt-8 gap-2 sm:gap-4">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="flex-1 text-sm sm:text-base px-3 sm:px-4"
                >
                  <ChevronLeft className="w-4 h-4 mr-1 sm:mr-2" />
                  <span className="hidden xs:inline">Voltar</span>
                  <span className="xs:hidden">Voltar</span>
                </Button>
              )}

              {step < totalSteps ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 ml-auto text-sm sm:text-base px-3 sm:px-4"
                >
                  <span className="hidden xs:inline">Próximo</span>
                  <span className="xs:hidden">Próximo</span>
                  <ChevronRight className="w-4 h-4 ml-1 sm:ml-2" />
                </Button>
              ) : (
                <Button type="submit" className="flex-1 ml-auto text-sm sm:text-base px-3 sm:px-4">
                  <span className="hidden sm:inline">Enviar Agendamento</span>
                  <span className="sm:hidden">Enviar</span>
                  <Check className="w-4 h-4 ml-1 sm:ml-2" />
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingForm;
