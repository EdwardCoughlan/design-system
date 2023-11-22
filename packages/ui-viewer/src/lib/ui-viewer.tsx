import styles from './ui-viewer.module.css';

/* eslint-disable-next-line */
export interface UiViewerProps {}

export function UiViewer(props: UiViewerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiViewer!</h1>
    </div>
  );
}

export default UiViewer;
