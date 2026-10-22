import { useState } from "react";
import { fireEvent, render, screen, waitFor, cleanup } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

afterEach(cleanup);
function MenuFixture() {
  const [open,setOpen]=useState(false);
  return <Sheet open={open} onOpenChange={setOpen}><SheetTrigger asChild><Button>Open menu</Button></SheetTrigger><SheetContent side="left" aria-describedby={undefined}><SheetTitle>Menu</SheetTitle><a href="/repayment" onClick={e=>{e.preventDefault();setOpen(false);}}>Repayment</a></SheetContent></Sheet>;
}
it("locks background scrolling and restores it after page selection",async()=>{
  render(<MenuFixture/>);
  fireEvent.click(screen.getByRole("button",{name:"Open menu"}));
  await screen.findByRole("dialog");
  expect(document.body).toHaveAttribute("data-scroll-locked", "1");
  fireEvent.click(screen.getByRole("link",{name:"Repayment"}));
  await waitFor(()=>expect(screen.queryByRole("dialog")).toBeNull());
  expect(document.body).not.toHaveAttribute("data-scroll-locked");
});
it("closes on Escape and restores keyboard focus to the opener",async()=>{
  render(<MenuFixture/>);
  const opener=screen.getByRole("button",{name:"Open menu"});
  fireEvent.click(opener);
  await screen.findByRole("dialog");
  fireEvent.keyDown(document.activeElement ?? document.body,{key:"Escape",code:"Escape"});
  await waitFor(()=>expect(screen.queryByRole("dialog")).toBeNull());
  await waitFor(()=>expect(document.activeElement).toBe(opener));
});
