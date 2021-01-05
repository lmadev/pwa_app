<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class NbpController extends AbstractController
{
    const API_URL = "https://api.nbp.pl/api/exchangerates/tables/A?format=json";
    /**
     * @var HttpClientInterface
     */
    private HttpClientInterface $httpClient;

    /**
     * NbpController constructor.
     * @param HttpClientInterface $httpClient
     */
    public function __construct(HttpClientInterface $httpClient)
    {
        $this->httpClient = $httpClient;
    }


    /**
     * @Route("/nbp/index", name="app_nbp_index")
     */
    public function index(): Response
    {
        $currency = $this->getCurrency()[array_key_first($this->getCurrency())]['rates'];
        return $this->render('nbp/index.html.twig', ['currency'=>$currency]);
    }

    private function getCurrency(): array
    {
        try {
            $response = $this->httpClient->request(
                'GET',
                self::API_URL
            );
            return $response->toArray();
        } catch (TransportExceptionInterface $e) {

        } catch (ClientExceptionInterface $e) {
        } catch (DecodingExceptionInterface $e) {
        } catch (RedirectionExceptionInterface $e) {
        } catch (ServerExceptionInterface $e) {
        }

    }
}