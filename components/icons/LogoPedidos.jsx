import * as React from "react"

export const LogoPedidos = (props) => {

    const { width = '1em' , height = '1em' } = props

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={ width } height={ height } {...props}>
          <defs>
            <style>{".a{fill:#325ac3}"}</style>
          </defs>
          <path
            className="a"
            d="M32.464.455c-7.023 0-11.928 5.549-11.928 13.494 0 7.765 4.886 12.782 12.449 12.782a19.8 19.8 0 0 0 8.164-1.573l.883-.4-1.333-5.252-1.248.547a13.648 13.648 0 0 1-5.9 1.09c-2.3 0-6.048-.768-6.643-5.66h11.14s.488.008 1.212.01a3.95 3.95 0 0 0 3.817-3.526 11.677 11.677 0 0 0-1.921-7.343C39.29 1.798 36.184.454 32.464.454m-.332 5.3a4.247 4.247 0 0 1 3.16 1.175 4.644 4.644 0 0 1 1.271 2.485.57.57 0 0 1-.529.766h-8.9c.473-1.7 1.739-4.426 5-4.426M17.1 2.329C15.124.783 12.191 0 8.385 0A28.275 28.275 0 0 0 3.23.362a3.845 3.845 0 0 0-1.872.747 3.112 3.112 0 0 0-.891 1.054 4.911 4.911 0 0 0-.462 2.055v22.416h6.826v-9.25c.39.015.776.019 1.152.019 3.961 0 7.329-1.077 9.481-3.026a7.754 7.754 0 0 0 2.561-6.044 7.433 7.433 0 0 0-2.924-6m-9.037 9.735c-.456 0-.867-.011-1.233-.035l-.019-3.081V7.073a2.51 2.51 0 0 1 .151-1.084 1.47 1.47 0 0 1 .613-.566 2.345 2.345 0 0 1 .891-.168c4.734 0 4.729 2.465 4.729 3.258 0 2.938-2.794 3.555-5.137 3.555M62.506 3.316C60.101 1.116 56.56 0 51.983 0a27.263 27.263 0 0 0-5.207.33 3.362 3.362 0 0 0-1.332.538 3.272 3.272 0 0 0-1.1 1.479 6.626 6.626 0 0 0-.277 2v22.061l1.283.147a50.684 50.684 0 0 0 5.689.289c4.973 0 8.939-1.318 11.477-3.815a14.006 14.006 0 0 0 3.815-10.184c0-4.034-1.289-7.242-3.825-9.529M51.634 21.502q-.928 0-1.633-.029V7.419s-.017-.634 0-1.088a.971.971 0 0 1 .571-.9 2.341 2.341 0 0 1 .888-.116c.211-.007.434-.009.668-.009 2.756 0 4.842.694 6.2 2.064a7.542 7.542 0 0 1 1.9 5.583c0 5.6-2.972 8.556-8.591 8.556M93.721 3.316C91.315 1.116 87.776 0 83.199 0a27.458 27.458 0 0 0-5.209.328 3.364 3.364 0 0 0-1.331.54 3.244 3.244 0 0 0-1.1 1.479 6.588 6.588 0 0 0-.275 2v22.061l1.281.147a50.707 50.707 0 0 0 5.689.289c4.973 0 8.939-1.318 11.478-3.815a14 14 0 0 0 3.815-10.184c0-4.034-1.288-7.242-3.825-9.529M82.847 21.502q-.926 0-1.632-.029V7.419s-.018-.635 0-1.088a.97.97 0 0 1 .573-.9 2.321 2.321 0 0 1 .886-.116c.21-.007.433-.009.668-.009 2.755 0 4.842.694 6.2 2.064a7.541 7.541 0 0 1 1.9 5.583c0 5.6-2.971 8.556-8.592 8.556M111.485.028c-7.5 0-12.746 5.56-12.746 13.52a13.432 13.432 0 0 0 3.573 9.588 12.078 12.078 0 0 0 8.787 3.594c6.163 0 12.8-4.246 12.8-13.569 0-7.733-5.1-13.134-12.41-13.134m-.191 21.2c-3.417 0-5.9-3.293-5.9-7.828 0-2.925 1.263-7.876 5.991-7.876 4.625 0 5.847 5.089 5.847 7.78 0 4.591-2.5 7.924-5.942 7.924M70.596.175a2.984 2.984 0 0 0-2.983 2.984v23.476h5.967V3.157A2.983 2.983 0 0 0 70.596.173M134.75 10.44c-3.1-1.232-3.655-1.839-3.655-2.93 0-1.253 1.037-2.031 2.708-2.031a7.665 7.665 0 0 1 2.686.5c.049.022.1.04.151.06l.112.044h.008a2.771 2.771 0 0 0 1.768-5.252V.825a13.528 13.528 0 0 0-4.631-.8c-5.345 0-9.222 3.371-9.222 8.014 0 2.355 1.213 5.6 6.979 7.7 3.294 1.236 3.548 2.092 3.548 3.167 0 2.019-2.088 2.322-3.335 2.322a10.846 10.846 0 0 1-5.053-1.482l-1.25-.741-1.734 5.452.8.468a14.49 14.49 0 0 0 7.153 1.8 10.967 10.967 0 0 0 7.133-2.237 7.521 7.521 0 0 0 2.717-5.97c0-4.937-3.921-6.978-6.875-8.083M144.385 23.801a2.883 2.883 0 0 1 2.9-3.042 2.819 2.819 0 0 1 2.85 3.042 2.867 2.867 0 0 1-2.947 3.044 2.838 2.838 0 0 1-2.8-3.044M172.246 20.969a11.5 11.5 0 0 1-9.755 5.876c-6.845 0-11.72-6.412-11.72-13.28S155.646.287 162.491.287a11.249 11.249 0 0 1 8.373 3.892c.362.457 1.455 1.831 1.455 2.442a1.021 1.021 0 0 1-1.02 1.069 1.155 1.155 0 0 1-.8-.381 9.381 9.381 0 0 0-8.006-4.885c-5.679 0-9.683 5.418-9.683 11.141s4 11.144 9.683 11.144a9.375 9.375 0 0 0 7.935-4.733 1 1 0 0 1 .944-.686 1.082 1.082 0 0 1 1.093 1.069 1.053 1.053 0 0 1-.217.61M197.535 13.486c0 6.944-4.965 13.28-11.829 13.28s-11.753-6.336-11.753-13.28c0-6.869 4.892-13.279 11.753-13.279s11.829 6.41 11.829 13.279m-2.118 0c0-5.648-3.941-11.066-9.711-11.066-5.693 0-9.708 5.418-9.708 11.066 0 5.724 4.015 11.143 9.708 11.143 5.77 0 9.711-5.42 9.711-11.143M234.605 11.586v13.661a1.026 1.026 0 0 1-.928 1.068.982.982 0 0 1-.929-1.068V11.586c0-4.579-2.257-9.081-6.7-9.081-5.572 0-7.694 6.868-7.694 12.211v10.532a1.027 1.027 0 0 1-.931 1.068.983.983 0 0 1-.928-1.068V11.586c0-4.579-2.255-9.081-6.7-9.081-5.638 0-7.96 5.114-7.76 11.905 0 .153.065.458 0 .535v10.3a.938.938 0 1 1-1.859 0V1.886a.938.938 0 1 1 1.859 0v3.9c1.59-3.282 4.444-5.419 7.76-5.419 3.782 0 6.7 2.749 7.9 6.793 1.525-3.969 4.512-6.793 8.359-6.793 5.442 0 8.559 5.419 8.559 11.219"
          />
        </svg>
      ) 
} 

export default LogoPedidos
