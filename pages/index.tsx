import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline'
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, MailIcon, ScaleIcon } from '@heroicons/react/outline'
import { SVGProps } from 'react'

const navigation = {
  main: [
    { name: 'من نحن', href: '#' },
    { name: 'مقالاتنا', href: '#' },
    { name: 'وظائف', href: '#' },
    { name: 'أخبار', href: '#' },
    { name: 'إنضم إلينا', href: '#' },
    { name: 'شركائنا', href: '#' }
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Dribbble',
      href: '#',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

const transferFeatures = [
  {
    id: 1,
    name: 'التنقيب عن البيانات',
    description:
      'تتلخص أنشطتنا في التنقيب عن البيانات بسحب البيانات المهمة من أكبر المنصات الرقمية على الأنترنت وتطبيقات الجوال. نقوم بذلك بشكل أخلاقي محافظين بذلك على خصوصية المستخدمين وطالبي البيانات وسلامة خوادم المواقع والتطبيقات.',
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: 'تنظيف ومعالجة البيانات ثم التأكد منها',
    description:
      'أحد أهم خطوات أنابيب البيانات هي تنظيف البيانات وتنقيحها من الشوائب والحالات الشاذة. ثم التأكد من نسبة منها بشرياً قبل تقديمها',
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: 'جمع البيانات بأجهزة الأي أو تي',
    description:
      'تختص أحد أقسام مجموعة بنك نيورل في جمع البيانات من أجهزة الأيوتي المربوطة بخوادمنا.',
    icon: LightningBoltIcon,
  },
  {
    id: 4,
    name: 'البحث عن الشركات الراغبة ببيع بياناتها',
    description:
      'نبحث بشكل دوري عن الشركات التي تملك بيانات ضخمة ذات القيمة الممتازة وترغب بالإستفادة من بيعها عبرنا',
    icon: LightningBoltIcon,
  },
  {
    id: 5,
    name: 'البحث عن البيانات المهمة والمتعلقة للبيانات المطلوبة',
    description:
      'نبحث بشكل متكرر عن البيانات الضخمة أينما كانت في الأرجاء ونحاول ايجاد البيانات المهمة المتعلقة بالبيانات التي تطلب منا',
    icon: LightningBoltIcon,
  },
]
const communicationFeatures = [
  {
    id: 1,
    name: 'محللي البيانات',
    description:
      'يقضي محللي البيانات 70٪ من وقتهم في تنظيف بياناتهم لتحضيرها لإدخالها لنماذجهم أو خوارزمياتهم',
    icon: AnnotationIcon,
  },
  {
    id: 2,
    name: 'شركات التحليل والإستشارات',
    description:
      'جودة الإستشارات المقدمة من شركات التحليل والإستشارات تعتمد بشكل مباشر على جودة البيانات التي تستعملها في تدريب نماذجها وخوارزمياتها',
    icon: MailIcon,
  },
  {
    id: 3,
    name: 'شركات الذكاء الإصطناعي',
    description:
      'تحتاج شركات الذكاء الإصطناعي إلى البيانات لتشغل أعمالها وتركز على تقديم خدماتها',
    icon: MailIcon,
  },
  {
    id: 4,
    name: 'الحكومات',
    description:
      'يمكن أن تستفيد الحكومات من خدماتنا في تنظيفه البيانات وتحضير أنابيب البيانات لبياناتها المفتوحة',
    icon: MailIcon,
  },
  {
    id: 5,
    name: 'المدن الذكية',
    description:
      'بناء بينة تحتية مولدة للبيانات النظيفة يعتبر من أساسيات المدن الذكية الحديثة. بإمكاننا العمل على البنية التحتية لتوليد بيانات ضخمة مفيدة ومدرة للأرباح للمدن الذكية',
    icon: MailIcon,
  },
]
const features = [
  {
    name: 'شريحة عملائنا',
    description: 'المدن الذكية, الشركات الصغيرة والمتوسطة, محللي السوق',
    icon: CloudUploadIcon,
  },
  {
    name: 'القيم المقدمة',
    description: 'منصة ولوحة تحكم لتحليل البيانات بأدوات الذكاء الإصطناعي',
    icon: LockClosedIcon,
  },
  {
    name: 'القنوات',
    description: 'نقدم بيانات نظيفة ومعاد معالجتها عبر خدمات أمازون ويب وأيضاً لوحات تحكم',
    icon: RefreshIcon,
  },
  {
    name: 'مصادر إراداتنا',
    description: 'رسوم إشتراك سنوي, أجور الإستخدام',
    icon: ShieldCheckIcon,
  },
  {
    name: 'مواردنا',
    description: 'البيانات, الخوادم, أجهزة المعالجة',
    icon: CogIcon,
  },
  {
    name: 'أنشطتنا الرئيسية',
    description: 'إنتاج وتحليل البيانات',
    icon: ServerIcon,
  },
]


const featurestwo = [
  {
    name: '١٠ مليون مبيعات',
    description: 'المدن الذكية, الشركات الصغيرة والمتوسطة, محللي السوق',
    icon: CloudUploadIcon,
  },
  {
    name: 'أقل من ٥٠ موظف',
    description: 'منصة ولوحة تحكم لتحليل البيانات بأدوات الذكاء الإصطناعي',
    icon: LockClosedIcon,
  },
  {
    name: 'أقل من مليون ريال من الأصول',
    description: 'نقدم بيانات نظيفة ومعاد معالجتها عبر خدمات أمازون ويب وأيضاً لوحات تحكم',
    icon: RefreshIcon,
  },
  {
    name: '١٠٠ زبون تجاري',
    description: 'رسوم إشتراك سنوي, أجور الإستخدام',
    icon: ShieldCheckIcon,
  },
  {
    name: '١٠٠,٠٠٠ زبون غير تجاري',
    description: 'البيانات, الخوادم, أجهزة المعالجة',
    icon: CogIcon,
  },
  {
    name: '%توطين بنسبة 100',
    description: 'إنتاج وتحليل البيانات',
    icon: ServerIcon,
  },
]


const Home: NextPage = () => {
  return (
<div className="max-w-7xl mx-auto sm:px-6 lg:px-8 bg-gray-50">
    <div className="min-h-screen pt-16 pb-12 flex flex-col bg-gray-50 font-Tajawal bg-gray-50">
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex justify-center">
          <a href="/" className="inline-flex">
            <span className="sr-only">NeuralBank</span>
          </a>
        </div>
        <div className="py-16">
          <div className="text-center">
            <h1 className="mt-2 text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">بنك نيورل</h1>

            <p className="mt-8 text-base text-gray-500 lg:px-56">

              منصة بيانات لتطبيقات الذكاء الاصطناعي. جميع خوارزميات الذكاء الاصطناعي ونماذجها تحتاج إلى البيانات. قوة هذه النماذج تعمد على قوة وجودة البيانات المدخلة إلى هذه النماذج. بنك نيورل سيتأكد من أن يزود بيانات عالية الجودة نظيفة بأعلى موثوقية. نقوم بذلك عن طريق معالجة البيانات المشتراة أو المجمعة أو الحكومية المفتوحة.

            </p>
            <div className="mt-6">
              <a href="" className="text-base font-medium text-indigo-600 hover:text-indigo-500">
                <span aria-hidden="true">&larr; </span>تعرف علينا أكثر
              </a>
            </div>
          </div>
        </div>
        <div className="relative py-4 sm:py-24 lg:py-4 bg-gray-50 font-Tajawal">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-base font-semibold uppercase tracking-wider text-indigo-600"></h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              نموذج عملنا
            </p>
            <p className="mx-auto mt-8 max-w-prose text-l text-gray-500 ">
              في مجموعة بنك نيورل أنشطتنا تتلخص في التنقيب عن البيانات, تطوير منصات لعرض التحليلات والبيانات للشركات بمختلف أحجامها, نطور نماذج ذكاء اصطناعي, نحسن إدارة البيانات, نحلل ونقييم البيانات على المدى الطويل والقصير ونبحث عن البيانات المهمة في السوق
            </p>

            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="pt-6">
                    <div className="flow-root rounded-lg bg-white px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                        <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-4 sm:py-24 lg:py-4 bg-gray-50">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-base font-semibold uppercase tracking-wider text-indigo-600"></h2>
            <p className="mt-8 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              أهدافنا في أول ٣ سنوات
            </p>
            <p className="mx-auto mt-6 max-w-prose text-xl text-gray-500">
              نسعى في مجموعة بنك نيورل لأن نكون المزود الأعلى جودة وموثوقية للبيانات الضخمة في المملكة العربية السعودية ومنطقة الشرق الأوسط.
            </p>

            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {featurestwo.map((feature) => (
                  <div key={feature.name} className="pt-6">
                    <div className="flow-root rounded-lg bg-white px-6 pb-8">
                      <div className="-mt-6">
                        <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
    <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
      <svg
        className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
        width={404}
        height={784}
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
      </svg>

      <div className="relative font-Tajawal">
        <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          طريقة عملنا
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
        </p>
      </div>

      <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center text-right">
        <div className="relative font-Tajawal">
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
            أنشطتنا الرئيسية
          </h3>
          <p className="mt-3 text-lg text-gray-500">
            لخصنا أنشطتنا في مجموعة بنك نيورل بشكل مبسط. نعمل حالياً على بعض هذه الأنشطة ونسعى لتقديم غيرها
          </p>

          <dl className="mt-10 space-y-10">
            {transferFeatures.map((item) => (
              <div key={item.id} className="relative">
                <dt>

                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
          <svg
            className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
            width={784}
            height={404}
            fill="none"
            viewBox="0 0 784 404"
          >
            <defs>
              <pattern
                id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
          </svg>
          <img
            className="relative mx-auto"
            width={490}
            src="https://drive.google.com/file/d/1FwBDtQi7CXOJpXrn1sLbD75oypqTy-NT/preview"
            alt=""
          />
        </div>
      </div>

      <svg
        className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
        width={404}
        height={784}
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
      </svg>

      <div className="relative mt-12 sm:mt-16 lg:mt-24">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="lg:col-start-2 text-right font-Tajawal">
            <h3 className="text-2xl font-Tajawal font-extrabold text-gray-900 tracking-tight sm:text-3xl">شرائح عملائنا</h3>
            <p className="mt-3 text-lg text-gray-500 font-Tajawal">
شريحة عملائنا تتراوح ما بين المحللين, رجال ورواد الأعمال, المستثمرين, الشركات الكبيرة وأخيراً الحكومات
            </p>

            <dl className="mt-10 space-y-10">
              {communicationFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={784} height={404} fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)" />
            </svg>
            <img
              className="relative mx-auto"
              width={490}
              src=""
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="bg-gray-50 font-Tajawal">
    <div className="max-w-7xl mx-auto py-8 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
        {navigation.main.map((item) => (
          <div key={item.name} className="px-5 py-2">
            <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
              {item.name}
            </a>
          </div>
        ))}
      </nav>
      <div className="mt-4 flex justify-center space-x-6">
        {navigation.social.map((item) => (
          <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
      <p className="mt-4 text-center text-base text-gray-400">&copy; جميع الحقوق محفوظة لنيورل بنك </p>
    </div>
  </footer>
</div>
  )
}

export default Home
