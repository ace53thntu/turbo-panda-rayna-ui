import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { button } from "styled-system/recipes";
import { cva } from "styled-system/css";
import { styled, type HTMLStyledProps } from "styled-system/jsx";

// const button = cva({
//   className: "button",
//   description: "The styles for the Button component",

//   base: {
//     display: "inline-flex",
//     alignItems: "center",
//     justifyContent: "center",
//     rounded: "base",
//     fontWeight: "semibold",
//     cursor: "pointer",
//     color: "neutral.shades.white",

//     _focusVisible: {
//       outline: "none",
//     },

//     _disabled: {
//       cursor: "not-allowed",
//     },
//   },

//   variants: {
//     variant: {
//       solid: {
//         bg: "primary.500",
//         _hover: {
//           bg: "primary.400",
//         },
//         _focus: {
//           bg: "primary.700",
//         },
//         _disabled: {
//           bg: "gray.300",
//           _hover: {
//             bg: "gray.300",
//           },
//         },
//       },
//       outline: {},
//     },
//     size: {
//       sm: {
//         px: "4",
//         py: "2",
//         textStyle: "sm",
//         lineHeight: "145%",
//       },
//       lg: {
//         padding: "8",
//       },
//       icon: {
//         p: "2",
//       },
//       iconLarge: {
//         p: "4",
//       },
//     },
//     colorScheme: {
//       primary: {},
//       secondary: {},
//       destructive: {
//         bg: "semantics.error.500",
//         _hover: {
//           bg: "semantics.error.300",
//         },
//         _focus: {
//           bg: "semantics.error.700",
//         },
//         _disabled: {
//           bg: "gray.300",
//           _hover: {
//             bg: "gray.300",
//           },
//         },
//       },
//     },
//   },

//   compoundVariants: [
//     {
//       variant: "outline",
//       colorScheme: "primary",
//       css: {
//         border: "2px solid blue",
//       },
//     },
//   ],

//   defaultVariants: {
//     variant: "solid",
//     size: "sm",
//     colorScheme: "primary",
//   },
// });

const BaseButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean; children?: React.ReactNode }
>(({ asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp ref={ref} {...props} />;
});

BaseButton.displayName = "Button";

export const Button = styled(BaseButton, button);
export type ButtonProps = HTMLStyledProps<typeof Button>;
