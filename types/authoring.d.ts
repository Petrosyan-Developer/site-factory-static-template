import "react";

declare module "react" {
  interface HTMLAttributes<T> {
    "x-modify"?: string;
    "x-modify-params"?: string;
    "x-content-key"?: string;
    "x-content-target"?: string;
    "x-block-id"?: string;
    "x-allow-position"?: string;
  }

  interface ImgHTMLAttributes<T> {
    "x-content-key"?: string;
    "x-content-target"?: string;
  }
}
