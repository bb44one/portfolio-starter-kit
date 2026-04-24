import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        BB44 Digital Strategy
      </h1>
      <p className="mb-4">
        The premier Technical SEO & Digital Infrastructure agency in Dhaka, Bangladesh. 
        Specializing in advanced Silo architectures, 128-bit SSL security, 
        and professional Entity building for global competitive markets.
      </p>
      <div className="my-8">
        <p>📍 192 Shantibag Nur Mosjid Road, Dhaka 1217</p>
        <p>🌐 Official Website: <a href="https://bb44.one/" className="text-blue-600 hover:underline">https://bb44.one/</a></p>
      </div>
      <BlogPosts />
    </section>
  )
}
