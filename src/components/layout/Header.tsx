import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { Typography } from '@/components/ui/typography';
import { SiteConfig } from '@/lib/site-config';
import Image from 'next/image';
import Link from 'next/link';
import { LoginButton } from '../ui/LoginButton';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-12 items-center justify-between">
        <div className="ml-4 flex items-center gap-4">
          <Image src="/images/logo.svg" width={50} height={35} alt="app logo" />
          <Typography variant="h3" as={Link} href="/">
            {SiteConfig.title}
          </Typography>
        </div>

        <div className="mr-4 flex items-center justify-end">
          <nav className="flex items-center gap-4">
            <LoginButton />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}