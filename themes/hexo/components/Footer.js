
import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import BeiAnSite from '@/components/BeiAnSite'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  // 您可以根据需要修改网站的起始年份
  const since = '2024'
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='relative z-10 dark:bg-black flex-shrink-0 bg-hexo-light-gray justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm p-6'>
      {/* <DarkModeButton/> */}
      <i className='fas fa-copyright' /> {`${copyrightDate}`}
      <span>
        <i className='mx-1 animate-pulse fas fa-heart' />
        <a
          href="https://www.humbleguava.top/" // 您可以替换为您的个人主页链接
          className='underline font-bold  dark:text-gray-300 '>
          Humbleguava
        </a>
        .  

        <BeiAnSite />
        <BeiAnGongAn />
        <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>
          {/* 联系方式 */}
          Wechat: lty112500 | Email: humbleguava@gmail.com
        </h1>
      </span>
        

    </footer>
   )
}

export default Footer
