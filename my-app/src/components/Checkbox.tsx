import React, { useState } from "react";
import { Checkbox as CheckboxPrimitive } from "@/components/ui/checkbox";

export function Checkbox({ checked, onCheckedChange }: any) {
  return (
    <div>
      <CheckboxPrimitive checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );
}
