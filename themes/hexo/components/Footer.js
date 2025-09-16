import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import BeiAnSite from '@/components/BeiAnSite'

const Footer = ({ title }) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  // 注意：'since' 现在是一个硬编码的年份，您可以根据需要修改它
  const since = '2023'
  const copyrightDate =
    parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className='relative z-10 dark:bg-black flex-shrink-0 bg-hexo-light-gray justify-center text-center m-auto w-full leading-6  text-gray-600 dark:text-gray-100 text-sm p-6'>
      {/* <DarkModeButton/> */}
      <i className='fas fa-copyright' /> {`${copyrightDate}`}
      <span>
        <i className='mx-1 animate-pulse fas fa-heart' />
        {/* 注意：链接和作者名现在是硬编码的，您可以替换成您的信息 */}
        <a
          href="YOUR_LINK" // 替换为您的链接
          className='underline font-bold  dark:text-gray-300 '>
          YOUR_AUTHOR_NAME // 替换为您的名字
        </a>
        .  

        <BeiAnSite />
        <BeiAnGongAn />
        <h1 className='text-xs pt-4 text-light-400 dark:text-gray-400'>
          {title}
          {/* 注意：个人简介(BIO)现在是硬编码的，您可以替换成您的信息 */}
          {' | YOUR_BIO'}
        </h1>
      </span>
        

    </footer>
  )
}

export default Footer
