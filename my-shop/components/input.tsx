"use client";

import React from "react";

import { useFormContext } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  type?: string;
  name: string;
}

export const Input = ({ id, label, type, name, ...props }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="relative">
      <input
        {...props}
        id={id}
        type={type}
        className="block rounded-md px-6 pt-6 pb-1 w-full text-md text-zinc-600 border border-solid border-[#e1e1e1e] appearance-none focus:outline-none focus:ring-0 peer "
        placeholder=" "
        {...register(name)}
      />
      <label
        className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 order-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
        htmlFor="email"
      >
        {label}
      </label>
      {errors[name] && <p>{`${errors[name]?.message}`}</p>}
    </div>
  );
};
