"use client";

import { Moon, Sun } from "@gravity-ui/icons";
import { Switch, SwitchControl } from "@heroui/react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Switch onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <SwitchControl>
            <Switch.Thumb>
                <Switch.Icon>
                    {theme === 'dark' ? <Sun></Sun> : <Moon></Moon>}
                </Switch.Icon>
            </Switch.Thumb>
        </SwitchControl>
    </Switch>
  );
}