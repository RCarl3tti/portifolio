import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react"
import RedeSocial from "./RedeSocial"

export default function RedesSociais() {
    return (
        <div className="flex">
            <RedeSocial icone={<IconBrandLinkedin />} url="https://www.linkedin.com/in/renan-carletti" />
            <RedeSocial icone={<IconBrandInstagram />} url="https://www.instagram.com/carl3tti" />
            <RedeSocial icone={<IconBrandGithub />} url="https://github.com/RCarl3tti" />
        </div>
    )
}