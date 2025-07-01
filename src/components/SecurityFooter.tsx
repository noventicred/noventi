import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Lock,
  ShieldCheck,
  Shield,
  FileCheck,
  Key,
  LucideIcon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface SecurityFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface SecurityFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  companyName?: string;
  encryptionType?: string;
  certificationInfo?: string;
  complianceStandards?: string[];
  features?: SecurityFeature[];
  showFeatures?: boolean;
}

const defaultFeatures: SecurityFeature[] = [
  {
    icon: Shield,
    title: "Criptografia ponta a ponta",
    description: "Seus dados são criptografados em trânsito e em repouso.",
  },
  {
    icon: FileCheck,
    title: "Documentos seguros",
    description:
      "Todos os documentos são armazenados com segurança empresarial.",
  },
  {
    icon: Key,
    title: "Controle de acesso",
    description: "Protocolos rigorosos de autenticação protegem sua conta.",
  },
];

export const SecurityFooter = React.forwardRef<
  HTMLDivElement,
  SecurityFooterProps
>(
  (
    {
      className,
      companyName = "NoventiCred",
      encryptionType = "Criptografia SSL 256-bit",
      certificationInfo = "Certificação ISO 27001",
      complianceStandards = ["LGPD", "GDPR", "PCI DSS"],
      features = defaultFeatures,
      showFeatures = false,
      ...props
    },
    ref
  ) => {
    return (
      <footer
        ref={ref}
        className={cn(
          "w-full bg-gradient-to-r from-emerald-50 to-green-50 border-t border-emerald-100 py-4 shadow-sm",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="flex items-center justify-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-md">
                <ShieldCheck className="h-4 w-4 text-white" />
              </div>
              <span className="ml-2 text-sm font-medium text-emerald-800">
                Conexão Segura
              </span>
            </div>
            <p className="text-xs text-center text-emerald-700/80 max-w-md">
              Seus dados estão protegidos com {encryptionType}. Mantemos padrões
              rigorosos de segurança para garantir a confidencialidade das suas
              informações.
            </p>
            {showFeatures && (
              <>
                <Separator className="my-2 bg-emerald-100" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <feature.icon className="h-4 w-4 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <h4 className="text-xs font-medium text-emerald-800">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-emerald-700/70">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-emerald-700/80">
              <span>{certificationInfo}</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center">
                <Lock className="h-3 w-3 mr-1" />
                Compliance: {complianceStandards.join(", ")}
              </span>
              <span className="hidden md:inline">•</span>
              <span>
                © {new Date().getFullYear()} {companyName}
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
);

SecurityFooter.displayName = "SecurityFooter";

export default SecurityFooter;
