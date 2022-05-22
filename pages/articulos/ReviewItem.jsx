import { useEffect, useState } from 'react';
//Next js
import Script from 'next/script'
//Material UI
import {Box,Accordion,AccordionSummary,AccordionDetails,Typography} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function ReviewItem({item_num}) {  
  const [expanded,setExpanded]= useState(true)
  const [sku,setSku]          = useState('')

  useEffect(() => {
    // Creamos una función para actualizar el estado con el clientWidth
    const updateSku = () => {
      setSku(item_num)
    }
    // Actualizaremos el width al montar el componente
    updateSku()
    // Nos suscribimos al evento resize de window
    window.addEventListener("resize", updateSku)

    // Devolvemos una función para anular la suscripción al evento
    return () => {
      window.removeEventListener("resize", updateSku)
    }
  })

  return (
    <div>
      {(sku !== '')&&
      /* <Accordion expanded={expanded} onChange={()=>{setExpanded((expanded)?false:true)}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="comentarios"          
        >
          <Typography>Comentarios</Typography>
        </AccordionSummary>
        <AccordionDetails> */
          <Box> 
            <Script type="text/javascript" src="https://widget.reviews.io/polaris/build.js" 
              onLoad={() => {
                new ReviewsWidget('#ReviewsWidget', {
                    //Your REVIEWS.io account ID and widget type:
                    store: 'pedidos.com',
                    widget: 'polaris',
                    //Content settings (store_review,product_review,questions). Choose what to display in this widget:
                    options: {
                        types: 'product_review,questions',
                        lang: 'en',
                        //Possible layout options: bordered, large and reverse.
                        layout: '',
                        //How many reviews & questions to show per page?
                        per_page: 15,
                        //Product specific settings. Provide product SKU for which reviews should be displayed:
                        product_review:{
                            //Display product reviews - include multiple product SKUs seperated by Semi-Colons (Main Indentifer in your product catalog )
                            sku: `${sku}`,
                            hide_if_no_results: false,
                        },
                        //Questions settings:
                        questions:{
                            hide_if_no_results: false,
                            enable_ask_question: true,
                            show_dates: true,
                            //Display group questions by providing a grouping variable, new questions will be assigned to this group.
                            grouping:'[Group questions by providing a grouping variable here or a specific product SKU]'
                        },
                        //Header settings:
                        header:{
                            enable_summary: true, //Show overall rating & review count
                            enable_ratings: true,
                            enable_attributes: true,
                            enable_image_gallery: true, //Show photo & video gallery
                            enable_percent_recommended: false, //Show what percentage of reviewers recommend it
                            enable_write_review: true, //Show "Escribe tu opinión" button
                            enable_ask_question: true, //Show "¿Dudas del producto?" button
                            enable_sub_header: true, //Show subheader

                        },
                        //Filtering settings:
                        filtering:{
                            enable: true, //Show filtering options
                            enable_text_search: true, //Show search field
                            enable_sorting: true, //Show sorting options (most recent, most popular)
                            enable_overall_rating_filter: true, //Show overall rating breakdown filter
                            enable_ratings_filters: true, //Show product attributes filter
                            enable_attributes_filters: true, //Show author attributes filter
                        },
                        //Review settings:
                        reviews:{
                            enable_avatar: true, //Show author avatar
                            enable_reviewer_name:  true, //Show author name
                            enable_reviewer_address:  true, //Show author location
                            reviewer_address_format: 'city, country', //Author location display format
                            enable_verified_badge: true, //Show "Cliente Verificado" badge
                            enable_reviewer_recommends: true, //Show "Lo recomiendo" badge
                            enable_attributes: true, //Show author attributes
                            enable_product_name: true, //Show display product name
                            enable_images: true, //Show display review photos
                            enable_ratings: true, //Show product attributes (additional ratings)
                            enable_share: true, //Show share buttons
                            enable_helpful_vote: true, //Show "¿Te ayudó la información?" section
                            enable_helpful_display: true, //Show how many times times review upvoted
                            enable_report: true, //Show report button
                            enable_date: true, //Show when review was published
                        },

                    },
                    //Translation settings
                    translations: {
                        'Verified Customer': 'Cliente Verificado',
                        "Based on [0] reviews": 'Basado en [0] comentarios',
                        "Write Review": "Comentario",
                        "What would you rate this product?": "¿Qué calificación le pondrías al producto?",
                        "Tell us your feedback about the product": "Comentarios sobre el producto",
                        "Thank you for your review!": "¡Gracias!",
                        "Your review has been submitted. We appreciate your feedback.": "Tu opinion ha sido guardada",
                        "Your name": "Nombre",
                        "Your email address": "Email",
                        "Cancel": "Cancelar",
                        "Submit": "Guardar",
                        "Ask Question": "¿Alguna pregunta?",
                        "Write your question": "Escribe tu pregunta",
                        "Thank you for your question!": "¡Gracias por tu pregunta!",
                        "Your question has been successfully submitted!": "Tu pregunta ha sido enviada",
                        "Sort": 'Ocultar',
                        "Clear Filters": "Borrar Filtros",
                        "Search": 'Buscar',
                        "Reviews": "Comentarios",
                        "Review": "Comentario",
                        "Questions": "Preguntas",
                        "No results found": "Sin resultado",
                        "Search": "Buscar",
                        "Order By": "Ordenar por",
                        "Newest First": "Más nuevo",
                        "Oldest First": "Más viejo",
                        "Most Popular": "Más popular",
                      "Highest Rating": "Mejores comentarios",
                        "Breakdown": "De mayor a menor",
                        "Verified Customer": "Cliente verificado",
                        "You've upvoted this review as helpful.": "Ha votado este comentario como útil",
                        "You've upvoted this question as helpful.": "Ha votado esta pregunta como útil",
                        "Report": "Reportar",
                        "Was this review helpful?": "¿Este comentario te fue útil?",
                        "No questions asked about this product": "Por el momento no hay preguntas registradas",
                        "No reviews collected for this product yet": "Por el momento no hay comentarios registrados",
                        "Yes": "Si",
                        "No": "No",
                        "Share": "Compartir",
                        "found this review helpful.": '¿Fue útil este comentario?',
                        "person": 'Persona',
                        "people": 'Personas',
                        "Anonymous": "Anónimo",
                        "Review author has provided a proof of purchase": "Se ha presentado evidencia de la compra",
                        "Was this question helpful?": "¿Esta pregunta fue útil?",
                        "Answered by": "Respondido por",
                        "Question asked by": "Pregunta hecha por",
                        "Reviewer didn't leave any comments": "No se dejo ningún comentario por parte del cliente",
                        "I recommend this product": "Recomiendo este producto",
                        "Be the first to write a review": "Se el primero en dejar un comentario",
                        "Be the first to ask a question about this product": "Se el primero en preguntar",
                        "Report review": "Reportar comentario",
                        "Report question": "Reportar pregunta",
                        "Your Email Address": "Ingrese Email",
                        "What's wrong with this review?": "¿Qué problema existe con el comentario?",
                        "What's wrong with this question?": "¿Qué problema existe con la pregunta?",
                        "Report submitted!": "Reporte enviado",
                        "Thank you for reporting.": "Gracias por levantar el reporte",
                        "Please enter some comments": "Por favor ingresa comentario",
                        "Please choose a rating": "Por favor elija una calificación",
                        "Please enter your name": "Favor ingresa tu nombre",
                        "Please enter your email address": "Favor ingresa tu email",
                        "Please enter your question": "Favor ingresa tu pregunta"
                    },
                    //Style settings:
                    styles: {
                        //Base font size is a reference size for all text elements. When base value gets changed, all TextHeading and TexBody elements get proportionally adjusted.
                        '--base-font-size': '16px',
                        //Button styles (shared between buttons):
                        '--common-button-font-family': 'Poppins, sans-serif',
                        '--common-button-font-size':'1rem',
                        '--common-button-font-weight':'500',
                        '--common-button-letter-spacing':'0',
                        '--common-button-text-transform':'none',
                        '--common-button-vertical-padding':'10px',
                        '--common-button-horizontal-padding':'20px',
                        '--common-button-border-width':'2px',
                        '--common-button-border-radius':'5px',
                        //Primary button styles:
                        '--primary-button-bg-color': '#3655a5',
                        '--primary-button-border-color': '#3655a5',
                        '--primary-button-text-color': '#ffffff',
                        //Secondary button styles:
                        '--secondary-button-bg-color': 'transparent',
                        '--secondary-button-border-color': '#0E1311',
                        '--secondary-button-text-color': '#0E1311',
                        //Star styles:
                        '--common-star-color': '#3655a5',
                        '--common-star-disabled-color': 'rgba(0,0,0,0.25)',
                        '--medium-star-size': '1.2rem',
                        '--small-star-size': '1.5rem',
                        //Heading styles:
                        '--heading-text-color': '#424242',
                        '--heading-text-font-weight': '500',
                        '--heading-text-font-family': 'Poppins, sans-serif',
                        '--heading-text-line-height': '1.5',
                        '--heading-text-letter-spacing': '0',
                        '--heading-text-transform': 'none',
                        //Body text styles:
                        '--body-text-color': '#0E1311',
                        '--body-text-font-weight': '400',
                        '--body-text-font-family': 'Poppins, sans-serif',
                        '--body-text-line-height': '1.4',
                        '--body-text-letter-spacing': '0',
                        '--body-text-transform': 'none',
                        //Input field styles:
                        '--inputfield-text-font-family': 'Poppins, sans-serif',
                        '--input-text-font-size': '15px',
                        '--inputfield-text-font-weight': '400',
                        '--inputfield-text-color': '#0E1311',
                        '--inputfield-border-color': 'rgba(0,0,0,0.2)',
                        '--inputfield-background-color': 'transparent',
                        '--inputfield-border-width': '1px',
                        '--inputfield-border-radius': '0px',
                        '--common-border-color': '#eee',
                        '--common-border-width': '1px',
                        '--common-sidebar-width': '190px',
                        //Slider indicator (for attributes) styles:
                        '--slider-indicator-bg-color': 'rgba(0,0,0,0.1)',
                        '--slider-indicator-button-color': '#0E1311',
                        '--slider-indicator-width': '190px',
                        //Badge styles:
                        '--badge-icon-color': '#0E1311',
                        '--badge-icon-font-size': 'inherit',
                        '--badge-text-color': '#0E1311',
                        '--badge-text-font-size': 'inherit',
                        '--badge-text-letter-spacing': 'inherit',
                        '--badge-text-transform': 'inherit',
                        //Author styles:
                        '--author-font-size': 'inherit',
                        '--author-text-transform': 'none',
                        //Author avatar styles:
                        '--avatar-thumbnail-size': '60px',
                        '--avatar-thumbnail-border-radius': '100px',
                        '--avatar-thumbnail-text-color': '#0E1311',
                        '--avatar-thumbnail-bg-color': 'rgba(0,0,0,0.1)',
                        //Product photo or review photo styles:
                        '--photo-video-thumbnail-size': '80px',
                        '--photo-video-thumbnail-border-radius': '0px',
                        //Media (photo & video) slider styles:
                        '--mediaslider-scroll-button-icon-color': '#0E1311',
                        '--mediaslider-scroll-button-bg-color': 'rgba(255, 255, 255, 0.85)',
                        '--mediaslider-overlay-text-color': '#ffffff',
                        '--mediaslider-overlay-bg-color': 'rgba(0, 0, 0, 0.8))',
                        '--mediaslider-item-size': '110px',
                        //Pagination & tabs styles (normal):
                        '--pagination-tab-text-color': '#0E1311',
                        '--pagination-tab-text-transform': 'none',
                        '--pagination-tab-text-letter-spacing': '0',
                        '--pagination-tab-text-font-size': '1rem',
                        '--pagination-tab-text-font-weight': '500',
                        //Pagination & tabs styles (active):
                        '--pagination-tab-active-text-color': '#0E1311',
                        '--pagination-tab-active-text-font-weight': '500',
                        '--pagination-tab-active-border-color': '#3655a5',
                        '--pagination-tab-border-width': '3px',
                    },
                  })
                }}
              ></Script>
            <div id="ReviewsWidget"></div>
          </Box>
      /*  </AccordionDetails>
      </Accordion> */
      }
    </div>
  )
}
