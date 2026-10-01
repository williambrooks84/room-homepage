export interface NavigationButtonProps {
    id: string;
    action: () => void;
    label: string;
    aria: string;
}

export interface HeroButtonProps {
    id: string;
    onClick: () => void;
    disabled: boolean;
    aria: string;
    image: string;
    alt: string;
}

export interface HeroShopButtonProps {
    id: string;
    action: () => void;
    label: string;
    aria: string;
    image: string;
    alt: string;
}

export interface DescriptionProps{
    title: string;
    text: string;
}