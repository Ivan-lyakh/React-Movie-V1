
type Props = {
  getNullResultSearch: () => void
  getNullSelectedMovie: () => void
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>
}

export function Footer(props: Props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="footerBody">
          <div>
            <h2 className="footerTitle">Footer</h2>
          </div>
          <div>
            <button
              className="btnFooter"
              onClick={() => {
                props.getNullSelectedMovie()
                props.setSearchActive(false)
                props.getNullResultSearch()
                window.scrollTo(0, 0)
              }}>На Главную
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}