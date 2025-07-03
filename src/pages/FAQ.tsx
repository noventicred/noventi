import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Search,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Shield,
  CreditCard,
  FileText,
  DollarSign,
  Users,
  ArrowRight,
} from "lucide-react";

const FAQPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSolicitarAgora = () => {
    if (location.pathname === "/") {
      const element = document.getElementById("loan-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollToForm: true } });
    }
  };

  const faqCategories = [
    {
      title: "Informações Gerais",
      icon: <HelpCircle className="w-6 h-6" />,
      questions: [
        {
          question: "O que é a NoventiCred?",
          answer:
            "A NoventiCred é uma fintech especializada em empréstimos pessoais online, oferecendo soluções de crédito rápidas, seguras e personalizadas para atender às suas necessidades financeiras.",
        },
        {
          question: "Qual o valor mínimo e máximo para empréstimo?",
          answer:
            "Você pode solicitar empréstimos de R$ 5.000 até R$ 200.000, conforme seu perfil de crédito e capacidade de pagamento. O valor final é definido após nossa análise.",
        },
        {
          question: "A NoventiCred é uma empresa confiável?",
          answer:
            "Sim! Somos uma empresa devidamente registrada e regulamentada. Contamos com mais de 50.000 clientes satisfeitos e utilizamos as melhores práticas de segurança do mercado.",
        },
        {
          question: "Preciso sair de casa para solicitar?",
          answer:
            "Não! Todo o processo é 100% digital. Você pode solicitar, enviar documentos e acompanhar sua solicitação pelo celular ou computador, no conforto da sua casa.",
        },
      ],
    },
    {
      title: "Processo de Solicitação",
      icon: <FileText className="w-6 h-6" />,
      questions: [
        {
          question: "Quanto tempo demora para aprovação?",
          answer:
            "Nossa análise é feita em tempo real usando inteligência artificial. Você recebe a resposta em até 1 minuto após enviar a solicitação completa.",
        },
        {
          question: "Quais documentos são necessários?",
          answer:
            "Você precisa somente do seu CPF, nome completo, dados para contato e dados bancários.",
        },
        {
          question: "Consulta o SPC/Serasa?",
          answer:
            "Fazemos nossa própria avaliação de crédito sem consultar SPC/Serasa. Mesmo com restrições, você pode ser aprovado, pois analisamos seu perfil de forma personalizada.",
        },
        {
          question: "Posso cancelar a solicitação?",
          answer:
            "Sim! Você pode cancelar sua solicitação a qualquer momento antes da liberação do dinheiro, sem nenhum custo ou compromisso.",
        },
      ],
    },
    {
      title: "Taxas e Condições",
      icon: <DollarSign className="w-6 h-6" />,
      questions: [
        {
          question: "Qual a taxa de juros?",
          answer:
            "Nossas taxas começam a partir de 1,35% ao mês, variando conforme seu perfil de crédito. A taxa final é personalizada e será informada antes da contratação.",
        },
        {
          question: "Existem taxas extras ou escondidas?",
          answer:
            "Não! Somos transparentes. A única taxa é a de juros do empréstimo. Não cobramos taxa de adesão, manutenção ou qualquer outra tarifa adicional.",
        },
        {
          question: "Posso quitar antecipadamente?",
          answer:
            "Sim! Você pode quitar seu empréstimo antecipadamente com desconto proporcional dos juros, sem multa ou taxa de penalidade.",
        },
        {
          question: "Como funciona o parcelamento?",
          answer:
            "Oferecemos parcelamento flexível de 6x até 64x, com parcelas fixas. Você escolhe a quantidade que melhor se adequa ao seu orçamento.",
        },
      ],
    },
    {
      title: "Pagamento e Recebimento",
      icon: <CreditCard className="w-6 h-6" />,
      questions: [
        {
          question: "Como recebo o dinheiro?",
          answer:
            "Após aprovação, o valor é depositado diretamente na sua conta corrente ou poupança no mesmo dia útil, sem necessidade de ir ao banco.",
        },
        {
          question: "Preciso ter conta no banco específico?",
          answer:
            "Não! Trabalhamos com todos os bancos. Você pode receber em qualquer conta de sua titularidade, incluindo bancos digitais.",
        },
        {
          question: "Como faço o pagamento das parcelas?",
          answer:
            "O pagamento é feito por boleto bancário ou débito automático (opcional). Você recebe o boleto por email e WhatsApp com antecedência.",
        },
        {
          question: "O que acontece se atrasar uma parcela?",
          answer:
            "Entre em contato conosco imediatamente. Temos opções de renegociação e parcelamento para evitar problemas maiores.",
        },
      ],
    },
  ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const index = parseInt(`${categoryIndex}${questionIndex}`);
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <PageTransition>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-primary to-green-dark text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-4 leading-tight">
                Perguntas Frequentes
              </h1>
              <p className="text-green-100 text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
                Encontre respostas para suas dúvidas sobre empréstimos, processo
                de solicitação e muito mais.
              </p>

              {/* Barra de Pesquisa */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Pesquise sua dúvida..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl text-green-dark placeholder-green-400 border border-green-200 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-lg"
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">
                    +50K
                  </div>
                  <div className="text-green-100">Clientes Atendidos</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">
                    1 min
                  </div>
                  <div className="text-green-100">Resposta Média</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">3h</div>
                  <div className="text-green-100">Dinheiro na Conta</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {filteredCategories.length === 0 ? (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Nenhum resultado encontrado
                  </h3>
                  <p className="text-gray-500">
                    Tente pesquisar com outras palavras-chave ou navegue pelas
                    categorias abaixo.
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredCategories.map((category, categoryIndex) => (
                    <div
                      key={categoryIndex}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden"
                    >
                      <div className="bg-gradient-to-r from-green-50 to-green-100 px-6 py-4 border-b border-green-200">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-green-primary rounded-lg flex items-center justify-center text-white">
                            {category.icon}
                          </div>
                          <h2 className="text-xl font-bold text-green-dark">
                            {category.title}
                          </h2>
                        </div>
                      </div>

                      <div className="p-2">
                        {category.questions.map((faq, questionIndex) => {
                          const index = parseInt(
                            `${categoryIndex}${questionIndex}`
                          );
                          return (
                            <div
                              key={questionIndex}
                              className="border-b border-gray-100 last:border-b-0"
                            >
                              <button
                                onClick={() =>
                                  toggleFAQ(categoryIndex, questionIndex)
                                }
                                className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-green-50 transition-colors group"
                              >
                                <span className="font-semibold text-green-dark text-base sm:text-lg pr-4 group-hover:text-green-primary transition-colors">
                                  {faq.question}
                                </span>
                                {openIndex === index ? (
                                  <ChevronUp className="w-5 h-5 text-green-primary flex-shrink-0" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-green-primary flex-shrink-0" />
                                )}
                              </button>

                              {openIndex === index && (
                                <div className="px-4 pb-4 animate-in slide-in-from-top-2 duration-200">
                                  <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-primary">
                                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                      {faq.answer}
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-green-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 text-green-dark">
                Ainda tem dúvidas?
              </h2>
              <p className="text-gray-700 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
                Nossa equipe está pronta para ajudar você. Entre em contato
                através dos canais abaixo.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-green-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-green-dark mb-2">Telefone</h3>
                  <p className="text-gray-600 text-sm">(11) 9 9999-9999</p>
                  <p className="text-gray-500 text-xs mt-1">
                    Segunda a Sexta, 8h às 18h
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-green-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-green-dark mb-2">WhatsApp</h3>
                  <p className="text-gray-600 text-sm">(11) 9 9999-9999</p>
                  <p className="text-gray-500 text-xs mt-1">Atendimento 24h</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-green-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-green-dark mb-2">E-mail</h3>
                  <p className="text-gray-600 text-sm">
                    contato@noventicred.com.br
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Resposta em até 2h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-green-primary to-green-dark text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
              Pronto para solicitar seu empréstimo?
            </h2>
            <p className="text-green-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Não perca tempo! Comece sua solicitação agora e tenha o dinheiro
              na sua conta em até 3 horas.
            </p>
            <button
              className="bg-white text-green-primary hover:bg-green-50 font-bold rounded-xl px-8 py-4 text-lg shadow-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
              onClick={handleSolicitarAgora}
            >
              <CreditCard className="w-5 h-5" />
              Solicitar Agora
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default FAQPage;
