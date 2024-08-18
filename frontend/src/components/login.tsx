import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"



export function Login() {
  const url = 'http://localhost:5000/login';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log('submitting login form');

    const data = {
      email,
      password,
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
        const { token } = await response.json();
        localStorage.setItem('token', token);
        toast.success('Login successful');
        navigate('/profile');
      } else {
        toast.error('Login failed');
      }
    } catch (error) {
      toast.error(`Error logging in: ${error}`);
    }
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl font-extrabold text-center">Login</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="mail@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" onChange={(e)=>setPassword(e.target.value)} required placeholder="* * * * * * * * * * *" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={()=>handleSubmit()}>Sign in</Button>
      </CardFooter>
    </Card>
  )
}
