/**
 * Velite build
 */
const IS_DEV = process.argv.indexOf('dev') !== -1
const IS_BUILD = process.argv.indexOf('build') !== -1

if (!process.env.VELITE_STARTED && (IS_DEV || IS_BUILD)) {
  process.env.VELITE_STARTED = '1'

  const { build } = await import('velite')

  await build({ watch: IS_DEV, clean: !IS_BUILD })
}

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
}
