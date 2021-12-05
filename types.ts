export {};

declare global {
  namespace Vitl {
    interface Product {
      name: string;
      price: number;
      nutrients: Nutrient[];
    }
    interface IConfig {
      currency: string;
      tolerableUpperLimits: TUL[];
    }
  }
  type Nutrient = {
    id: string;
    amount: number;
  };
  type TUL = {
    id: string;
    amount: number;
    unit: string;
  };

  type IItem = {
    media: string;
    title: string;
    label: string;
    onClick: () => void;
  };

  type ISliderMenu = {
    open: boolean;
    toggleDrawer: () => void;
  };
}
