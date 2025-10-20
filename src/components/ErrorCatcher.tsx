import React from "react";

type Props = { children: React.ReactNode; title?: string };
type State = { error?: Error };

export default class ErrorCatcher extends React.Component<Props, State> {
  state: State = {};

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: any) {
    console.error("[ErrorCatcher]", error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="rounded-xl border border-red-900/60 bg-red-950/40 p-4 text-red-200">
          <div className="font-semibold mb-1">
            {this.props.title || "Component Error"}
          </div>
          <pre className="whitespace-pre-wrap text-xs">
            {String(this.state.error?.message || this.state.error)}
          </pre>
        </div>
      );
    }
    return this.props.children as any;
  }
}
