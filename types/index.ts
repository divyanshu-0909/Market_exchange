import * as z from "zod";

export const RegisterTypes = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  password: z.string().min(10, {
    message: "Password must be at least 10 characters.",
  }),
});

export const LoginTypes = z.object({
  email: z.string().email(),
  password: z.string().min(10, {
    message: "Password must be at least 10 characters.",
  }),
});

export interface SearchParams {
  [key: string]: string | string[] | undefined
}

export interface Option {
  label: string
  value: string
  icon?: React.ComponentType<{ className?: string }>
  withCount?: boolean
}

export interface DataTableFilterField<TData> {
  label: string
  value: keyof TData
  placeholder?: string
  options?: Option[]
}

export interface DataTableFilterOption<TData> {
  id: string
  label: string
  value: keyof TData
  options: Option[]
  filterValues?: string[]
  filterOperator?: string
  isMulti?: boolean
}

// export type DrizzleWhere<T> =
//   | SQL<unknown>
//   | ((aliases: T) => SQL<T> | undefined)
//   | undefined
