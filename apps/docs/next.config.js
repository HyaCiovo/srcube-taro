/**
 * Velite build
 */
const IS_DEV = process.argv.includes('dev')
const IS_BUILD = process.argv.includes('build')

if (!process.env.VELITE_STARTED && (IS_DEV || IS_BUILD)) {
  process.env.VELITE_STARTED = '1'

  const { build } = await import('velite')

  await build({ watch: IS_DEV, clean: !IS_BUILD })
}

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
}
