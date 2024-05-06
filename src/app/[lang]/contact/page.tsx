import Link from "next/link";
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Locale, i18n } from '../../../../i18n-config';
import { getDictionary } from '@/lib/dictionary';
import ContactForm from '@/components/ContactForm';

export default async function Contact({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { contact } = await getDictionary(lang)

  return (
    <>
      <Link
          className="p-2 fixed z-10 top-0 left-0 flex items-center text-lg md:text-2xl text-white"
          key={lang}
          href={lang === i18n.defaultLocale ? "/" : `/${lang}`}
        >
          <FaLongArrowAltLeft className="mr-2"/>Back
        </Link>
        <main className="w-5/6 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 mx-auto text-center contact">
          <h1 className="intro-title text-4xl font-light mb-4"><span>_</span>{contact.title}</h1>
          <div className="intro-content tracking-wide">
            <ContactForm form={contact}/>
          </div>
        </main>
    </>
  )
}
