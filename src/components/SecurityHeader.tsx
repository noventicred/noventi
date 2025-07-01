import React from "react";
import { Shield, Lock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SecurityHeaderProps {
  title?: string;
  description?: string;
  variant?: "default" | "success" | "warning";
  icon?: "shield" | "lock" | "check";
  className?: string;
}

const SecurityHeader: React.FC<SecurityHeaderProps> = ({
  title = "Conexão Segura",
  description = "Seus dados estão protegidos com criptografia avançada.",
  variant = "default",
  icon = "shield",
  className,
}) => {
  const variantStyles = {
    default:
      "from-emerald-50 to-emerald-100 border-emerald-200 text-emerald-800",
    success: "from-green-50 to-green-100 border-green-200 text-green-800",
    warning: "from-amber-50 to-amber-100 border-amber-200 text-amber-800",
  };

  const IconComponent = {
    shield: Shield,
    lock: Lock,
    check: CheckCircle,
  }[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "w-full bg-gradient-to-br border rounded-lg shadow-sm px-4 py-3 flex items-center gap-3",
        variantStyles[variant],
        className
      )}
    >
      <div className="flex-shrink-0 p-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
        <IconComponent className="h-5 w-5" strokeWidth={2} />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-sm">{title}</h3>
        <p className="text-xs opacity-80">{description}</p>
      </div>
    </motion.div>
  );
};

export default SecurityHeader;
