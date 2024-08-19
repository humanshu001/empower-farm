import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { useEffect } from "react";

export function Register() {
  const url = 'https://empower-farm-backend.vercel.app/register';

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  const [emailExists, setEmailExists] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Function to check if email exists
    const checkEmailExists = async () => {
      if (email) {
        setLoading(true);
        try {
          const response = await fetch(`https://empower-farm-backend.vercel.app/check-email?email=${email}`);
          const data = await response.json();
          setEmailExists(data);  // Assume API returns { exists: true/false }
        } catch (error) {
          console.error('Error checking email:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    // Debounce the email check
    const timeoutId = setTimeout(checkEmailExists, 500);

    // Clear timeout if email changes before debounce period ends
    return () => clearTimeout(timeoutId);
  }, [email]);

  const handleSubmit = async () => {
    console.log('submitting registration form');

    const data = {
      firstName,
      lastName,
      email,
      mobile,
      whatsapp,
      password,
      address
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Registration successful - please login');
      } else {
        toast.error('Registration failed');
      }
    } catch (error) {
      toast.error(`Error registering: ${error}`);
    }
  }
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
              <Input id="first-name" value={firstName} onChange={
                (e)=>setFirstName(e.target.value)
              } placeholder="Max" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" value={lastName} onChange={
                (e)=>setLastName(e.target.value)
              } placeholder="Robinson" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              className={emailExists ? 'border-red-400' : ''}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="mail@example.com"
              required
            />
            {loading && <p className="text-gray-500 text-sm">Checking email...</p>}
            {emailExists && (
              <p className="text-red-400 text-sm">Email already exists</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Your Address"
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
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
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
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="* * * * * * * * * * *"
            />
          </div>
          <Button type="submit" className="w-full" onClick={()=>handleSubmit()}>
            Create an account
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
