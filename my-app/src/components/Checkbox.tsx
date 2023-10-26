import React, { ReactNode } from "react";
import { Checkbox } from "@/components/ui/checkbox";

type CheckboxDemoProps = {
  children: ReactNode; // children prop 추가
};

export function CheckboxDemo({ children }: CheckboxDemoProps) {
  return (
    <div>
      <Checkbox />
    </div>
  );
}
