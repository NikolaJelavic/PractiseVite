import RandomColor from "../components/RandomColor"
 let colors=["#e53935","#e91e63","#9c27b0", "#ff9800"]

export default function Home() {
    return (
    <RandomColor colors={colors} />
    )
  }