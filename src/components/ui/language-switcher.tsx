import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
            className="font-mono text-xs gap-2"
        >
            <Globe className="h-3 w-3" />
            {language.toUpperCase()}
        </Button>
    );
};
