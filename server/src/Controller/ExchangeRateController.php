<?php

namespace App\Controller;

use App\Service\ExchangeInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * @Route("rates/")
 */
class ExchangeRateController extends AbstractController
{
    /**
     * @var ExchangeInterface
     */
    private $exchangeService;

    public function __construct(ExchangeInterface $exchangeService)
    {
        $this->exchangeService = $exchangeService;
    }

    /**
     * @Route("rate/{currency}", methods={"GET"})
     * @param string $currency
     * @return JsonResponse
     */
    public function getCurrenciesAction(string $currency): JsonResponse
    {
        return $this->json(['rate' => $this->exchangeService->exchangeCurrency($currency)]);
    }
}
