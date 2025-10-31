import BookingForm from "@/components/BookingForm";
import logo from "@/assets/logo.png";
import { Brain, Sparkles, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8 md:mb-10 animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-30 blur-lg group-hover:opacity-50 transition duration-500"></div>
              <img 
                src={logo} 
                alt="Tiago Braune - Psicologia & Hipnose" 
                className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in px-4">
            Transforme sua vida com
            <span className="block mt-3 md:mt-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-2">
              Psicologia & Hipnoterapia
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 md:mb-16 animate-fade-in max-w-2xl mx-auto px-4">
            Agende sua consulta e dê o primeiro passo para uma vida mais equilibrada e plena
          </p>
        </div>
      </header>

      {/* Form Section */}
      <main className="container mx-auto px-4 pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto">
          <BookingForm />
        </div>
      </main>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col items-center p-6 md:p-8 bg-card rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in">
              <h3 className="font-semibold text-foreground mb-4 text-base md:text-lg text-center">Atendimento Profissional</h3>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center animate-pulse hover:animate-none transition-all duration-200 hover:scale-110" style={{ animationDuration: '1.5s' }}>
                <Brain className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <p className="text-sm md:text-base text-muted-foreground text-center">
                Psicólogo experiente com abordagens modernas e eficazes
              </p>
            </div>

            <div className="flex flex-col items-center p-6 md:p-8 bg-card rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="font-semibold text-foreground mb-4 text-base md:text-lg text-center">Hipnoterapia Clínica</h3>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary/10 flex items-center justify-center animate-pulse hover:animate-none transition-all duration-200 hover:scale-110" style={{ animationDuration: '1.5s', animationDelay: '0.1s' }}>
                <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-secondary" />
              </div>
              <p className="text-sm md:text-base text-muted-foreground text-center">
                Técnicas de hipnose para tratamento de diversos desafios
              </p>
            </div>

            <div className="flex flex-col items-center p-6 md:p-8 bg-card rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-semibold text-foreground mb-4 text-base md:text-lg text-center">Cuidado Personalizado</h3>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/10 flex items-center justify-center animate-pulse hover:animate-none transition-all duration-200 hover:scale-110" style={{ animationDuration: '1.5s', animationDelay: '0.2s' }}>
                <Heart className="w-8 h-8 md:w-10 md:h-10 text-accent" />
              </div>
              <p className="text-sm md:text-base text-muted-foreground text-center">
                Tratamento individualizado focado em seus objetivos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-16 md:mt-20">
        <div className="container mx-auto px-4 py-8 md:py-10">
          <div className="text-center text-muted-foreground">
            <p className="mb-2 text-sm sm:text-base">© 2024 Tiago Braune - Psicologia & Hipnose</p>
            <p className="text-xs sm:text-sm">CRP: [Número do Registro] | Atendimento presencial e online</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
