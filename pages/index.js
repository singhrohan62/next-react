import Link from 'next/link'

const Index = () => (
	<div>
	<Link href='/about'>
	<a>About</a>
	</Link>
	<Link href='/contact'>
	<button>Contact</button>
	</Link>
	<p>Hello Next.js</p>
	</div>
)

export default Index;