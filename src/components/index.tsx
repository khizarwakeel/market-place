import { Button } from "./ui/button"

const Index = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <h4>Again Hello World</h4>
      <div className="flex gap-8 px-6 py-5">
      <Button>
        Learn More
      </Button>
      <Button>
        Submit
      </Button>
      </div>
    </div>
  )
}

export default Index