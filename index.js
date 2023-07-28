import { useEffect, useRef, useState } from "react";
export const MediaComponent = (props) => {
    const { sources } = props;
    const [media, setMedia] = useState();
    const mediaRef = useRef(null);
    useEffect(() => {
        const media = Array.from(mediaRef.current.querySelectorAll(".dpics"));
        setMedia(media);
    }, []);
    useEffect(() => {
        let t = null;
        if (media) {
            const length = media.length;
            if (length === 1)
                return;
            let nm = Array();
            let delay = 7000;
            media.forEach((md, i) => {
                const content = md.firstElementChild;
                if ((content === null || content === void 0 ? void 0 : content.tagName) === 'VIDEO') {
                    const rcontent = content;
                    delay = 2 * rcontent.duration * 1000;
                }
                let oldX = md.style.translate;
                oldX = oldX ? oldX.slice(0, oldX.indexOf("p")) : "0";
                const x = Number(oldX);
                const clientWidth = md.clientWidth;
                if (i === length - 1) {
                    md.style.translate = `${-i * clientWidth + x - i * 10}px`;
                    i = 0;
                }
                else {
                    md.style.translate = `${clientWidth + x + 10}px`;
                    i++;
                }
                nm[i] = md;
            });
            t = setTimeout(setMedia, delay, nm);
        }
        return () => {
            t && clearTimeout(t);
        };
    }, [media]);
    return (<div ref={mediaRef} className="pics">
      {sources.map((m, i) => (<div key={i} className="dpics">
          {m.ct.startsWith("image") ? (<img src={m.url} alt="App "/>) : (<video src={m.url} controls></video>)}
        </div>))}
    </div>);
};
