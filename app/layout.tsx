import { createElement, type ReactNode } from "react"

export default function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  return createElement(
    "html",
    { lang: "en" },
    createElement("body", null, createElement("main", null, children)),
  )
}