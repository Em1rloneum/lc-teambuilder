import styles from "./Board.module.scss"

export default function Board({children} : {children: React.ReactNode}) {
  return (
    <div className={styles.board}>
      {children}
    </div>
  )
}
