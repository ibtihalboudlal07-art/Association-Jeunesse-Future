import { Menu, X, ArrowUpRight, HeartHandshake } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/association-logo.jpeg';
import { joinFormUrl } from '../data/siteData';
const links = [['Accueil','accueil'],['À propos','apropos'],['Activités','activites'],['Projets','projets'],['Vie associative','vie'],['Bénévolat','benevolat'],['Galerie','galerie'],['Dons','dons'],['Contact','contact']];
export default function Header(){const [open,setOpen]=useState(false);return <header className="header"><a className="logo" href="#accueil"><img src={logo} alt="Association Jeunesse de Futur"/><span>Jeunesse<br/><b>de Futur</b></span></a><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Ouvrir la navigation">{open?<X/>:<Menu/>}</button><nav className={open?'visible':''}>{links.map(([label,id])=><a href={'#'+id} key={id} onClick={()=>setOpen(false)}>{label}</a>)}<a href={joinFormUrl} target="_blank" rel="noreferrer" className="nav-cta"><HeartHandshake size={16}/>Rejoindre<ArrowUpRight size={15}/></a></nav></header>}
