import type { NextPage } from 'next'

import { useTranslation } from 'next-i18next'

import PageLayout from '@/layouts'
import { makeServerSideProps } from '@/libs/getServerSide'
import { DEFAULT_LOCALE } from '@/configs/locale'

const IndexPage: NextPage = () => {
  const { t } = useTranslation(['common'])
  return <PageLayout title="หน้าแรก">{t('test')}</PageLayout>
}

export const getServerSideProps = makeServerSideProps([...DEFAULT_LOCALE])

export default IndexPage
