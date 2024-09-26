'use client'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import Image from "next/image";
import { signIn } from "next-auth/react";
export default function LoginModal() {

	const handleLogin = async () => {
		signIn('google', {
			callbackUrl: '/dashboard',
			redirect: true
		})

	};
	return (
		<Dialog>
			<DialogTrigger asChild><Button>Getting start</Button></DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Welcome to chat APP</DialogTitle>
					<DialogDescription>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, provident repudiandae tempora iusto numquam nulla porro laudantium dolore sint cupiditate aliquam odio pariatur aspernatur officiis. Optio totam magni nisi labore!
					</DialogDescription>
				</DialogHeader>
				<Button variant={"outline"} onClick={handleLogin}>
					<Image src="/images/google.png"
						className=" mr-4"
						width={25}
						height={25}
						alt="google" />
					Continue with Google

				</Button>
			</DialogContent>
		</Dialog>
	)

};