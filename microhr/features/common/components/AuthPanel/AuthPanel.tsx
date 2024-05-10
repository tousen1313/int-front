import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { setCookie } from "nookies";
import { Auth } from "@/service/common/type";

type Props = {
  title: string;
  description: string;
  buttonTitle: string;
  authHandler: (payload: Auth) => Promise<{ id: number }>;
  isCompany: boolean;
  isLogin: boolean;
};

const AuthPanel = ({
  title,
  description,
  buttonTitle,
  authHandler,
  isCompany,
  isLogin,
}: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const redirectToAppropriatePage = (isCompany: boolean, isLogin: boolean) => {
    const baseRoute = isCompany ? "/company" : "/worker";
    const targetRoute = isLogin ? baseRoute : `${baseRoute}/profile`;
    router.push(targetRoute);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const payload = { email, password };
      const res = await authHandler(payload);
      setCookie(null, "userId", String(res.id), {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7日間
        path: "/",
      });

      const sessionType = isCompany ? "company" : "worker";
      setCookie(null, "sessionType", sessionType, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7日間
        path: "/",
      });

      redirectToAppropriatePage(isCompany, isLogin);

      router.refresh();
      alert(isLogin ? "ログインしました" : "会員登録しました");
    } catch {
      alert("入力した情報が間違っています");
    }
  };

  return (
    <div className="flex justify-center mt-10 p-10">
      <Card className="max-w-[460px] w-full px-5">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid w-full items-center">
              <div className="flex flex-col space-y-2 mb-5">
                <Label htmlFor="email">メールアドレス</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="例）example@en-japan.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-2 mb-7">
                <Label htmlFor="password">パスワード</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="※半角英数字6文字以上"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button className="w-full max-w-[320px] mx-auto h-14 rounded-full text-lg">
                {buttonTitle}
              </Button>
            </div>
          </CardContent>
        </form>
        {isLogin && (
          <CardFooter className="flex justify-center pb-3 border-t-2">
            <p className="text-sm">
              初めてご利用する方は
              <Button
                variant="link"
                className="px-2 text-blue-500"
                onClick={() =>
                  router.push(isCompany ? "/company/make" : "/worker/make")
                }
              >
                アカウント登録
              </Button>
            </p>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default AuthPanel;
