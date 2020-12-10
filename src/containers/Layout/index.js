import React, { Component } from "react";

class Layout extends Component {
  componentDidMount() {
    const { title } = this.props;

    document.title = title
      ? `${process.env.NEXT_PUBLIC_NAME} | ${title}`
      : `${process.env.NEXT_PUBLIC_NAME}`;
  }

  render() {
    const { children } = this.props;
    return (
      <main
        style={{
          padding: "0 15px",
          boxSizing: "border-box",
          backgroundColor: "#E5E5E5",
          width: "100vw",
          height: "100vh",
        }}
      >
        {/* <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
        {children}
      </main>
    );
  }
}

export default Layout;
