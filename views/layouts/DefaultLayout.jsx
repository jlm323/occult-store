const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IM+Fell+DW+Pica"/>
                    <link rel="stylesheet" href="/css/style.css"/>
                </head>
                <body>
                    <nav id="top">
                        <div id="header-img">
                            <h1 id="nav-title">Aether Emporium</h1>
                        </div>
                        <a href={`/${this.props.itemGroup}`} className="link">{this.props.itemGroup}</a>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;