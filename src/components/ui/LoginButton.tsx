'use client';

import * as React from "react";
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LoginButton() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  if (!session) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>Login</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => signIn('github')}>
              Login with Github
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
      <>
      <DropdownMenu>
        <DropdownMenuTrigger><img src={session.user?.image ?? '/default-profile.png'} alt="Profile" className="size-8 rounded-full" /></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setIsOpen(true)}>
              Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogTrigger>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <p>Are you sure you want to disconnect?</p>
            <AlertDialogCancel>
              No, keep connected
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                signOut();
                setIsOpen(false);
              }}>Yes, disconnect
            </AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
      </>
  );
}