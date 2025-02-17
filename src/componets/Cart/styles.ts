import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "../../styles";

export const CartContent = styled(Dialog.Content, {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    width: "30rem",
    background: "$gray800",
    padding: "3rem",
    paddingTop: "4.5rem",
    boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
    display: "flex",
    flexDirection: "column"
})

export const CartClose = styled("div", {})

export const CartProduct = styled("div", {})

export const CartProductDetails = styled("div", {})

export const CartProductImage = styled("div", {})

export const CartFinalization = styled("div", {})

export const FinalizationDetails = styled("div", {})