import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Register() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-center font-extrabold">
          Register
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Max" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Robinson" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="mail@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="number">Mobile</Label>
            <div className="flex">
              <Button
                variant="outline"
                className="w-[50px] bg-background hover:bg-background cursor-default mr-0.5"
              >
                +91
              </Button>
              <Input
                id="number"
                type="number"
                placeholder="XXXXX-XXXXX"
                required
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="number">WhatsApp</Label>
            <div className="flex">
              <Button
                variant="outline"
                className="w-[50px] bg-background hover:bg-background cursor-default mr-0.5"
              >
                +91
              </Button>
              <Input
                id="number"
                type="number"
                placeholder="XXXXX-XXXXX"
                required
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="* * * * * * * * * * *"
            />
          </div>
          <Button type="submit" className="w-full">
            Create an account
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
