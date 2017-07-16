import Link from 'next/link'
export default () => (
<div>Click <Link href={{ pathname: 'prueba', query: { name: 'leangchhean' }}}><a>here</a></Link> to read more</div>
)
