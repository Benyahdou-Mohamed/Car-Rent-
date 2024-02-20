import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { CarProps } from "@types";
//import { generateCarImageUrl } from "@utils";

export interface CarDetailsProps{
    isOpen:boolean;
     closeModal:()=>void;
      car:CarProps;
}
export const CarDetails = ({isOpen, closeModal, car}: CarDetailsProps) => {
  return (
    <div>carDetails</div>
  )
}
