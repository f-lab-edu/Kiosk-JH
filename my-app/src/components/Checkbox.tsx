import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export function CheckboxDemo({ checked, onCheckedChange }: any) {
  return (
    <div>
      <Checkbox checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );
}
