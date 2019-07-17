<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DisplayController extends AbstractController
{
    /**
     * @Route ("/", name = "index")
     */

   public function index()
   {
       return $this->render('homepage.html.twig');
   }
}

